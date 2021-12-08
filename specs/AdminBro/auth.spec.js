const assert = require('assert');
import playwright from 'playwright';
import {run, stop} from '../../lib/browser';
import AuthPage from '../../framework/pages/authPage';

describe('UI test AdminBro', () => {
			let page;
        beforeEach(async () => {
            page = await run('https://admin-bro-example-app-staging.herokuapp.com/admin/login')
        })

        afterEach(async () => {
            await stop();
        })

        it('Страница авторизации', async () => {
               
				const profileNameText = await AuthPage.getProfileName(page);
				assert.deepEqual(profileNameText, 'Welcome');
				const profileEmailText = await AuthPage.getProfileEmail(page);
				assert.deepEqual(profileEmailText, 'Email');
				const profilePassText = await AuthPage.getProfilePass(page);
				assert.deepEqual(profilePassText, 'Password');
				
            }
        )
    }
)

