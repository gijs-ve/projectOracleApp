'use client';
import { apiClient } from '@/lib/api/client';
import { setToken } from '@/lib/localStorage/gameToken';
import { classNames } from '@/lib/util/style/classNames';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../button/Button';

export const AuthForm = ({
    action,
    className,
}: {
    action: 'login' | 'register';
    className?: string;
}) => {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        passwordCheck: '',
        name: '',
    });

    const [error, setError] = useState('');

    const submitRegister = async () => {
        if (formValues.password !== formValues.passwordCheck) {
            setError('Passwords do not match');
            return;
        }
        const response = await apiClient.auth.register({
            email: formValues.email,
            password: formValues.password,
            name: formValues.name,
        });
        return response;
    };

    const submitLogin = async () => {
        const response = await apiClient.auth.login({
            email: formValues.email,
            password: formValues.password,
        });
        return response;
    };

    const onSubmit = async () => {
        const response =
            action === 'register'
                ? await submitRegister()
                : await submitLogin();
        if (!response) return;
        if (!response.ok) {
            setError(response.error);
        }
        if (response.ok) {
            setToken(response.data.token);
            router.push('/game');
        }
    };

    const actionIsRegister = action === 'register';

    return (
        <>
            <div
                className={classNames('font-t-rex-regular text-xl', className)}
            >
                {actionIsRegister && (
                    <InputContainer>
                        <label htmlFor="name">Username</label>
                        <input
                            name="name"
                            className="text-blackish p-2 bg-white"
                            onChange={(e) =>
                                setFormValues((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                        />
                    </InputContainer>
                )}
                <InputContainer>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        className="text-blackish p-2 bg-white"
                        onChange={(e) =>
                            setFormValues((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                    />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(e) =>
                            setFormValues((prev) => ({
                                ...prev,
                                password: e.target.value,
                            }))
                        }
                        type="password"
                        name="password"
                        className="text-blackish p-2 bg-white"
                    />
                </InputContainer>
                {actionIsRegister && (
                    <InputContainer>
                        <label htmlFor="password">Re-enter password</label>
                        <input
                            onChange={(e) =>
                                setFormValues((prev) => ({
                                    ...prev,
                                    passwordCheck: e.target.value,
                                }))
                            }
                            type="password"
                            name="password"
                            className="text-blackish p-2 bg-white"
                        />
                    </InputContainer>
                )}
                {error && <p className="text-red-500 mb-8">{error}</p>}
                <Button
                    text={action === 'register' ? 'Register' : 'Login'}
                    element="button"
                    onClick={() => onSubmit()}
                />
            </div>
        </>
    );
};

export const InputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={classNames('my-8 flex flex-col gap-4 w-full', className)}
        >
            {children}
        </div>
    );
};
