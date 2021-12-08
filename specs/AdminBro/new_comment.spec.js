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
        it('Перейти на страницу создания коментариев и создать новый комментарий', async () => {
				await AuthPage.login(page, 'test@example.com', 'password');
				await BoardPage.getComment(page);
				await CommentPage.createNewComment(page, 'test 2 test');
				const commentText = await CommentPage.сommentText(page);
				assert.deepEqual(commentText, 'test 2 test');
            }
        )
    }
)
