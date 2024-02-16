import { Route, Routes } from "react-router-dom";

import { Paths } from '@constants/path';
import { NotFoundPage } from "@pages/not-found-page";
import { MainPage } from "@pages/main-page";
import { Auth } from "@pages/auth";
import { PasswordRecovery } from "@pages/password-recovery";
import { Error } from "@pages/error";
import { RecoveryCode } from "@components/recovery-code";
import { RecoveryAccount } from "@components/recovery-account";

export const routes = (
    <Routes>
        {/* <Route path={Paths.AUTH} element={<Layout />}>
            <Route index={true} element={<WelcomePage />} />
            <Route element={<MainLayout />}>
                <Route path={Paths.EMPLOYEES} element={<EmployeesPage />} />
                <Route path={`${Paths.EMPLOYEES}/:emploeeId`} element={<EmployeesProfilePage />} />
                    <Route index={true} element={<EmployeesProfileTabs />} />
                    <Route path=':tabName' element={<EmployeesProfileTabs />} />
                </Route>
                <Route path={Paths.HANDBBOOKS} element={<Navigate to={Paths.HANDBOOKS_RATE_CONSTANTS} />} />
                <Route path='*' element={<NotFoundPage />} />
            <Route />
        </Route> */}

        <Route path={Paths.MAIN} element={<MainPage />} />
        <Route path={Paths.AUTH} element={<Auth />}>
            <Route path={Paths.REGISTRATION} element={<Auth />} />
            <Route path={Paths.CONFIRM_EMAIL} element={<Auth />} />
            <Route path={Paths.CHANGE_PASSWORD} element={<Auth />} />
            <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path={Paths.ERROR} element={<Error />} />
        <Route path={Paths.ERROR_EMAIL_NO_EXIST} element={<RecoveryCode />} />
        <Route path={Paths.ERROR_LOGIN} element={<RecoveryAccount />} />
        <Route path={Paths.RESULT} element={<MainPage />}>
            <Route path={Paths.SUCCESS} element={<MainPage />} />
            <Route path={Paths.SUCCESS_PASSWORD} element={<MainPage />} />
            <Route path={Paths.ERROR} element={<Error />} />
            <Route path={Paths.ERROR_USER_EXIST} element={<MainPage />} />

            <Route path={Paths.ERROR_EMAIL_CHECK} element={<MainPage />} />
            <Route path={Paths.ERROR_PASSWORD} element={<PasswordRecovery />} />

            <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
);
