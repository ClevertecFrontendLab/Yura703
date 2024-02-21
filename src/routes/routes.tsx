import { Route, Routes } from "react-router-dom";

import { PATH } from '@constants/path';
import { NotFoundPage } from "@pages/not-found-page";
import { MainPage } from "@pages/main-page";
import { Auth } from "@pages/auth";
import { PasswordRecovery } from "@pages/password-recovery";
import { InfoWindow } from "@pages/info-window";
import { RecoveryCode } from "@components/recovery-code";
import { RecoveryAccount } from "@components/recovery-account";
import { DATA_NOT_SAVED, EMAIL_ALREADY_EXIST, REGISTARATION_SUCCESSFUL } from "@constants/info-message";

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

        <Route path={PATH.MAIN} element={<MainPage />} />
        <Route path={PATH.AUTH} element={<Auth />}>
            <Route path={PATH.REGISTRATION} element={<Auth />} />
            <Route path={PATH.CONFIRM_EMAIL} element={<Auth />} />
            <Route path={PATH.CHANGE_PASSWORD} element={<Auth />} />
            <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path={PATH.ERROR} element={<InfoWindow {...DATA_NOT_SAVED} />} />
        <Route path={PATH.ERROR_EMAIL_NO_EXIST} element={<RecoveryCode />} />
        <Route path={PATH.ERROR_LOGIN} element={<RecoveryAccount />} />
        <Route path={PATH.ERROR_USER_EXIST} element={<InfoWindow {...EMAIL_ALREADY_EXIST} />} />
        <Route path={PATH.SUCCESS} element={<InfoWindow {...REGISTARATION_SUCCESSFUL} />} />
        <Route path={PATH.RESULT} element={<MainPage />}>

            <Route path={PATH.SUCCESS_PASSWORD} element={<MainPage />} />
            <Route path={PATH.ERROR} element={<InfoWindow {...DATA_NOT_SAVED} />} />
            <Route path={PATH.ERROR_EMAIL_CHECK} element={<MainPage />} />
            <Route path={PATH.ERROR_PASSWORD} element={<PasswordRecovery />} />

            <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
);
