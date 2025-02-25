import 'cypress-file-upload';
import inl_link from '../../../../support/pageObjects/WWSBM Internal/inl_Link.cy';
import inl_login from '../../../../support/pageObjects/WWSBM Internal/inl_Login.cy';

describe('MYWWSBM External Client dministrator', function () {

    let link, loginpage

    before(function () {
        // Initialize the object before all tests
        link = new inl_link();
        loginpage = new inl_login();
        
});

beforeEach(function () {
    // Load credentials from the fixture
    cy.fixture('mywwsbm_data').then((mywwsbm_data) => {
        this.mywwsbm_data = mywwsbm_data;
    });
});

it('Home', function () {

    //URL
    link.Link(this.mywwsbm_data.Internal_URL);

    //login Details
    loginpage.Login(this.mywwsbm_data.SA_username, this.mywwsbm_data.SA_passowrd, this.mywwsbm_data.facility, this.mywwsbm_data.SA_role)

    //homepage
    loginpage.homepage(this.mywwsbm_data.home);

    // Global Search
    loginpage.GlobalSearch(this.mywwsbm_data.Patient_name);

    // filters
    loginpage.Filters(this.mywwsbm_data.Start_Date, this.mywwsbm_data.End_Date, this.mywwsbm_data.DeliveredOn,
        this.mywwsbm_data.Internal_FTP, this.mywwsbm_data.Primary_Insurance, this.mywwsbm_data.Caller, this.mywwsbm_data.Verifier);

});


it('Home', function () {







});



});