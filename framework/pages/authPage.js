const profileNameField = '#app > section > section.sc-dQppl.elWfde.admin-bro_Box > section > h2';
const profileEmailField = '#app > section > section.sc-dQppl.elWfde.admin-bro_Box > form > div:nth-child(3) > label';
const profilePassField = '#app > section > section.sc-dQppl.elWfde.admin-bro_Box > form > div:nth-child(4) > label';
const loginButton = '#app > section > section.sc-dQppl.elWfde.admin-bro_Box > form > div.sc-jrAGrp.hBeDrK.admin-bro_Text > button'
const passwordField = '#app > section > section.sc-dQppl.elWfde.admin-bro_Box > form > div:nth-child(4) > input';
const usernameField = '#app > section > section.sc-dQppl.elWfde.admin-bro_Box > form > div:nth-child(3) > input';


const AuthPage = {
    getProfileName: async(page) => {
        const profileNameText = await page.textContent(profileNameField);
        return profileNameText;
    },
	 getProfileEmail: async(page) => {
		const profileEmailText = await page.textContent(profileEmailField);
		return profileEmailText;
    },
	 getProfilePass: async(page) => {
		const profilePassText = await page.textContent(profilePassField);
		return profilePassText;
    },
	login: async(page, username, password) => {
        await page.click(usernameField);
        await page.fill(usernameField, username);
        await page.click(passwordField);
        await page.fill(passwordField, password);
        await page.click(loginButton);
    }
}

export default AuthPage;
