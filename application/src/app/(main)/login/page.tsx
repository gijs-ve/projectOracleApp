import { AuthForm } from '@/main/components/form/AuthForm';
import { NormalSection } from '@/main/components/sections/NormalSection';
import { Heading } from '@/main/components/ui/Heading';

export default function RegisterPage() {
    return (
        <NormalSection>
            <div className="col-span-12">
                <Heading text="Login" h={1} />
            </div>
            <AuthForm
                action="login"
                className="col-span-12 lg:col-span-4 mt-8"
            />
        </NormalSection>
    );
}
