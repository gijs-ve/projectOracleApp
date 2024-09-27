'use client';
import { apiClient } from '@/lib/api/client';
import { classNames } from '@/lib/util/style/classNames';
import { useState } from 'react';
import { Button } from '../button/Button';

export const AuthForm = async ({
    action,
    className,
}: {
    action: 'login' | 'register';
    className?: string;
}) => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const onSubmit = async () => {
        const response = await apiClient.auth.login(
            formValues.email,
            formValues.password,
        );
    };
    return (
        <>
            <form
                className={classNames('font-t-rex-regular text-xl', className)}
            >
                <div className="my-8 flex flex-col gap-4 w-full ">
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
                </div>
                <div className="my-8 flex flex-col gap-4 w-full">
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
                </div>
                <Button
                    text={action === 'register' ? 'Register' : 'Login'}
                    element="button"
                    onClick={() => onSubmit()}
                />
            </form>
        </>
    );
};
