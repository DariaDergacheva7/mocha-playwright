const assert = require('assert');
import playwright from 'playwright';
import {run, stop} from '../../lib/browser';
import AuthPage from '../../framework/pages/authPage';
import BoardPage from '../../framework/pages/boardPage';

describe('UI test AdminBro', () => {
        let page;
        beforeEach(async () => {
            page = await run('https://admin-bro-example-app-staging.herokuapp.com/admin/login')
        })

        afterEach(async () => {
            await stop();
        })

        it('Войти с помощью логина и пароля', async () => {
			await AuthPage.login(page, 'test@example.com', 'password');
			
            const profileNameText = await BoardPage.getProfileName(page);
            assert.deepEqual(profileNameText, 'test@example.com')

            }
        )
    }
)

