import 'cypress-file-upload';
import inl_link from '../../../../support/pageObjects/WWSBM Internal/inl_Link.cy';
import inl_login from '../../../../support/pageObjects/WWSBM Internal/inl_Login.cy';
import inl_dashboard from '../../../../support/pageObjects/WWSBM Internal/inl_Dashboard.cy';
import inl_DataGroups from '../../../../support/pageObjects/WWSBM Internal/inl_EB_DataGroups.cy';

describe('MYWWSBM External Client dministrator', function () {

    let link, loginpage, dashboard, datagroups

    before(function () {
        // Initialize the object before all tests
        link = new inl_link();
        loginpage = new inl_login();
        dashboard = new inl_dashboard();
        datagroups = new inl_DataGroups();

    });

    beforeEach(function () {
        // Load credentials from the fixture
        cy.fixture('mywwsbm_data').then((mywwsbm_data) => {
            this.mywwsbm_data = mywwsbm_data;
        });
    });

    // it('Home', function () {

    //     //URL
    //     link.Link(this.mywwsbm_data.Internal_URL);

    //     //login Details
    //     loginpage.Login(this.mywwsbm_data.SA_username, this.mywwsbm_data.SA_passowrd, this.mywwsbm_data.facility, this.mywwsbm_data.SA_role)

    //     //homepage
    //     loginpage.homepage(this.mywwsbm_data.home);

    //     // Global Search
    //     loginpage.GlobalSearch(this.mywwsbm_data.Patient_name);

    //     // filters
    //     loginpage.Filters(this.mywwsbm_data.Start_Date, this.mywwsbm_data.End_Date, this.mywwsbm_data.DeliveredOn,
    //         this.mywwsbm_data.Internal_FTP, this.mywwsbm_data.Primary_Insurance, this.mywwsbm_data.Caller, this.mywwsbm_data.Verifier);


    // });


    // it('Dashboard', function () {

    //     //URL
    //     link.Link(this.mywwsbm_data.Internal_URL);

    //      //login Details
    //      loginpage.Login(this.mywwsbm_data.SA_username, this.mywwsbm_data.SA_passowrd, this.mywwsbm_data.facility, this.mywwsbm_data.SA_role);

    //     //Dasboard Navigation
    //     dashboard.Dashboard(this.mywwsbm_data.dashboard); 
    //     dashboard.Date_range(this.mywwsbm_data.Start_Date, this.mywwsbm_data.End_Date);
    //     dashboard.Filters(this.mywwsbm_data.State, this.mywwsbm_data.Product, this.mywwsbm_data.Status, this.mywwsbm_data.Insurance, this.mywwsbm_data.PrescriptionReceivedOn, this.mywwsbm_data.CallingCompletedOn, this.mywwsbm_data.DeliveredOn, this.mywwsbm_data.Subsequent_VF, this.mywwsbm_data.Internal_FTP);
    //     dashboard.Generate_Report(this.mywwsbm_data.Generate_Report, this.mywwsbm_data.fileName);

    // });

    
    it('Eligibility and Benefits (Data Groups)', function () {

        //URL
        link.Link(this.mywwsbm_data.Internal_URL);

         //login Details
         loginpage.Login(this.mywwsbm_data.SA_username, this.mywwsbm_data.SA_passowrd, this.mywwsbm_data.facility, this.mywwsbm_data.SA_role);

          // sidebar Navigation to Data groups
        datagroups.datagroups(this.mywwsbm_data.EB, this.mywwsbm_data.Data_Groups);
        datagroups.searchbar(this.mywwsbm_data.DataGroup_ID);  // Top Searchbar
        datagroups.DGfilters();  // filters
        datagroups.chart();  //chart
        datagroups.chartDownload(this.mywwsbm_data.Download_Chart, this.mywwsbm_data.fileName);  // Chart Download
        datagroups.CHfilters();  //Chart Filter


        });
});