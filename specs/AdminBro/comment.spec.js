const assert = require('assert');
import playwright from 'playwright';
import {run, stop} from '../../lib/browser';
import AuthPage from '../../framework/pages/authPage';
import BoardPage from '../../framework/pages/boardPage';
import CommentPage from '../../framework/pages/commentPage';

describe('UI test AdminBro', () => {
			let page;
        beforeEach(async () => {
            page = await run('https://admin-bro-example-app-staging.herokuapp.com/admin/login')
        })

        afterEach(async () => {
            await stop();
        })

        it('Перейти на страницу создания коментариев и проверить что есть кнопка "Create new"', async () => {
				await AuthPage.login(page, 'test@example.com', 'password');
				await BoardPage.getComment(page);
				const newCommentText = await CommentPage.newComment(page);
				assert.deepEqual(newCommentText, 'Create new');
            }
        )
    }
)

