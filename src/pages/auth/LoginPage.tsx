import { Box, Button, Card, CardContent, CardHeader, CircularProgress, Stack } from '@mui/material';
import { useLogin } from '@refinedev/core';
import { useMutation } from '@tanstack/react-query';
import { FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLoginForm } from '../../common/resolver/login-resolver';
import { RHFInput } from '../../components';
import { CardContentStyle, LoginContainerStyle } from './style';

const HOME_PAGE_PATH = '/';

export const LoginPage = () => {
  const form = useLoginForm();
  const {} = useMutation({});

  const { mutateAsync: login, isLoading: isLoginLoading } = useLogin();
  const navigate = useNavigate();

  const handleSubmitCredentials = form.handleSubmit(async data => {
    await login(data);
    navigate(HOME_PAGE_PATH);
  });

  return (
    <Box sx={LoginContainerStyle}>
      <Card sx={{ overflow: 'visible' }}>
        <CardContent sx={CardContentStyle}>
          <CardHeader title='Connection' />
          <FormProvider {...form}>
            <form onSubmit={handleSubmitCredentials}>
              <Stack width={400} spacing={1}>
                <Stack height={20}></Stack>
                <RHFInput name='email' type='email' />
                <RHFInput name='password' type='password' />
                <Stack height={20}></Stack>
                <Button endIcon={isLoginLoading ? <CircularProgress color='inherit' size={20} /> : null} variant='contained' type='submit'>
                  Envoyer
                </Button>
              </Stack>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </Box>
  );
};
