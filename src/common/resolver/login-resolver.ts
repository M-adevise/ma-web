import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

const loginValidator = z.object({
  email: z.string().email({ message: 'Adresse email invalid' }),
  password: z.string(),
});

const loginResolver = zodResolver(loginValidator);
type loginFormType = z.infer<typeof loginValidator>;

export const useLoginForm = () => {
  return useForm<loginFormType>({
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
    resolver: loginResolver,
  });
};
