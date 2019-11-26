export default class SuedtirolGuideStore {

    static myInstance = null;

    _userEmail = "";
    _userLocale = "de";

    static getInstance(): SuedtirolGuideStore {
        if (SuedtirolGuideStore.myInstance == null) {
            SuedtirolGuideStore.myInstance = new SuedtirolGuideStore();
        }

        return this.myInstance;
    }

    getUserEmail() {
        return this._userEmail;
    }

    setUserEmail(email: string) {
        this._userEmail = email;
    }

    getUserLocale() {
        return this._userLocale;
    }

    setUserLocale(locale: string) {
        this._userLocale = locale;
    }

    getQuestNameByLocale(): string {
        switch (this._userLocale) {
            default:
            case 'de':
                return 'Merano - Christmas Crime'.toLowerCase();
            case 'it':
                return 'Merano - Crimine Natalizio'.toLowerCase();
        }
    }
}