import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import FormBlogs from '../FormBlogs';
import BlogService from '../../../../services/BlogService';
import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from '../../../../store/LoaderSlice';
import cookies from 'js-cookie';
import i18next from 'i18next';

jest.mock('js-cookie');
jest.mock('../../../../services/BlogService');

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('FormBlogs Component', () => {
    const store = configureStore({
        reducer: {
            loader: loaderReducer,
        },
    });

    const renderFormBlogs = (props = {}) => {
        return render(
            <Provider store={store}>
                <BrowserRouter>
                    <FormBlogs {...props} />
                </BrowserRouter>
            </Provider>
        );
    };

    describe('English Language Tests', () => {
        beforeEach(() => {
            jest.clearAllMocks();
            (cookies.get as jest.Mock).mockReturnValue('en');
            i18next.changeLanguage('en');
        });

        it('renders form fields correctly in English', () => {
            renderFormBlogs();
            expect(screen.getByText(/Title:/i)).toBeInTheDocument();
            expect(screen.getByText(/Description:/i)).toBeInTheDocument();
            expect(screen.getByText(/Image URL:/i)).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
        });

        it('shows validation errors for empty required fields in English', async () => {
            renderFormBlogs();

            fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

            await waitFor(() => {
                expect(screen.getByText(/Title is required./i)).toBeInTheDocument();
                expect(screen.getByText(/Description is required./i)).toBeInTheDocument();
            });
        });

        it('validates English title format', async () => {
            renderFormBlogs();

            const titleInput = screen.getByLabelText(/Title:/i);
            fireEvent.change(titleInput, { target: { value: 'invalid title' } });
            fireEvent.keyUp(titleInput);

            await waitFor(() => {
                expect(
                    screen.getByText(
                        /Title must start with a capital letter and English words./i
                    )
                ).toBeInTheDocument();
            });
        });

        it('validates English description format', async () => {
            renderFormBlogs();

            const descriptionInput = screen.getByLabelText(/Description:/i);
            fireEvent.change(descriptionInput, { target: { value: '123' } });
            fireEvent.keyUp(descriptionInput);

            await waitFor(() => {
                expect(
                    screen.getByText(
                        /Description can only contain English letters and spaces./i
                    )
                ).toBeInTheDocument();
            });
        });
    });


    describe('Arabic Language Tests', () => {
        beforeEach(() => {
            jest.clearAllMocks();
            (cookies.get as jest.Mock).mockReturnValue('ar');
            i18next.changeLanguage('ar');
        });

        it('renders form fields correctly in Arabic', () => {
            renderFormBlogs();
            expect(screen.getByLabelText(i18next.t('title'))).toBeInTheDocument();
            expect(screen.getByLabelText(i18next.t('description'))).toBeInTheDocument();
            expect(screen.getByLabelText(i18next.t('imageUrl'))).toBeInTheDocument();
            expect(screen.getByRole('button', { name: i18next.t('submit') })).toBeInTheDocument();
        });

        it('shows validation errors for empty required fields in Arabic', async () => {
            renderFormBlogs();

            fireEvent.click(screen.getByRole('button', { name: i18next.t('submit') }));

            await waitFor(() => {
                expect(screen.getByText(i18next.t('titleIsRequired'))).toBeInTheDocument();
                expect(screen.getByText(i18next.t('descriptionIsRequired'))).toBeInTheDocument();
            });
        });

        it('validates Arabic title format', async () => {
            renderFormBlogs();

            const titleInput = screen.getByLabelText(i18next.t('title'));
            fireEvent.change(titleInput, { target: { value: 'English Title' } });
            fireEvent.keyUp(titleInput);

            await waitFor(() => {
                expect(screen.getByText(i18next.t('titleMustContainsArabicLetter'))).toBeInTheDocument();
            });
        });

        it('validates Arabic description format', async () => {
            renderFormBlogs();

            const descriptionInput = screen.getByLabelText(i18next.t('description'));
            fireEvent.change(descriptionInput, { target: { value: 'English text' } });
            fireEvent.keyUp(descriptionInput);

            await waitFor(() => {
                expect(screen.getByText(i18next.t('descriptionCanOnlyContainArabicLettersAndSpaces'))).toBeInTheDocument();
            });
        });
    });

    describe('Functionality Tests', () => {
        beforeEach(() => {
            jest.clearAllMocks();
            (cookies.get as jest.Mock).mockReturnValue('en');
            i18next.changeLanguage('en');
        });

        it('submits form successfully for new blog', async () => {
            (BlogService.postBlog as jest.Mock).mockResolvedValue({});
            renderFormBlogs();

            fireEvent.change(screen.getByLabelText(i18next.t('title')), {
                target: { value: 'Valid Title' }
            });
            fireEvent.change(screen.getByLabelText(i18next.t('description')), {
                target: { value: 'Valid description' }
            });
            fireEvent.change(screen.getByLabelText(i18next.t('imageUrl')), {
                target: { value: 'https://example.com/image.jpg' }
            });

            fireEvent.submit(screen.getByRole('button', { name: i18next.t('submit') }));

            await waitFor(() => {
                expect(BlogService.postBlog).toHaveBeenCalled();
                expect(mockNavigate).toHaveBeenCalledWith('/');
            });
        });

        it('loads and displays existing blog data when editing', async () => {
            const mockBlog = {
                id: '123',
                title: 'Existing Title',
                description: 'Existing Description',
                imageUrl: 'https://example.com/existing.jpg'
            };

            (BlogService.getBlogs as jest.Mock).mockResolvedValue([mockBlog]);

            renderFormBlogs({ isVisited: true, id: '123' });

            await waitFor(() => {
                expect(screen.getByLabelText(i18next.t('title'))).toHaveAttribute('placeholder', 'Existing Title');
                expect(screen.getByLabelText(i18next.t('description'))).toHaveAttribute('placeholder', 'Existing Description');
                expect(screen.getByLabelText(i18next.t('imageUrl'))).toHaveAttribute('placeholder', 'https://example.com/existing.jpg');
            });
        });

        it('validates URL format', async () => {
            renderFormBlogs();

            const imageInput = screen.getByLabelText(i18next.t('imageUrl'));
            fireEvent.change(imageInput, { target: { value: 'invalid-url' } });
            fireEvent.keyUp(imageInput);

            await waitFor(() => {
                expect(screen.getByText(i18next.t('pleaseEnterAValidUrl'))).toBeInTheDocument();
            });
        });
    });
});