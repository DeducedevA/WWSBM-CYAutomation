import 'cypress-file-upload';
import exl_loginpage from '../../../../support/pageObjects/WWSBM External/exl_loginpage.cy';
import exl_dashboard from '../../../../support/pageObjects/WWSBM External/exl_dashboard.cy';
import exl_DataGroups from '../../../../support/pageObjects/WWSBM External/exl_EB_DataGroups.cy';
import exl_ChartInsights from '../../../../support/pageObjects/WWSBM External/exl_EB_ChartInsights.cy';
import exl_AllChartView from '../../../../support/pageObjects/WWSBM External/exl_EB_AllChartView.cy';
import exl_UserDirectory from '../../../../support/pageObjects/WWSBM External/exl_stgs_UserDirectory.cy';
import exl_notifications from '../../../../support/pageObjects/WWSBM External/exl_stgs_Notifications.cy';
import exl_exclusionlist from '../../../../support/pageObjects/WWSBM External/exl_stgs_ExclusionList.cy';
import exl_editprofile from '../../../../support/pageObjects/WWSBM External/exl_stgs_EditProfile.cy';
import exl_recenthistory from '../../../../support/pageObjects/WWSBM External/exl_stgs_RecentHistory.cy';
import exl_paymentcalc from '../../../../support/pageObjects/WWSBM External/exl_tls_PaymentCalc.cy';
import exl_NPIvalidation from '../../../../support/pageObjects/WWSBM External/exl_tls_NPIValidation.cy';
import exl_reportrepo from '../../../../support/pageObjects/WWSBM External/exl_stgs_ReportRepo.cy';
import exl_link from '../../../../support/pageObjects/WWSBM External/exl_Link.cy';

describe('MYWWSBM External Client dministrator', function () {

    let loginPage, dashboard, datagroups, chartinsights, allchartview, userdirectory, notifications,
        exclusionlist, reportrepo, editprofile, recenthistory, paymentcalc, NPIvalidation, link;

    before(function () {
        // Initialize the object before all tests
        link = new exl_link();
        loginPage = new exl_loginpage();
        dashboard = new exl_dashboard();
        datagroups = new exl_DataGroups();
        chartinsights = new exl_ChartInsights();
        allchartview = new exl_AllChartView();
        userdirectory = new exl_UserDirectory();
        notifications = new exl_notifications();
        exclusionlist = new exl_exclusionlist();
        editprofile = new exl_editprofile();
        recenthistory = new exl_recenthistory();
        paymentcalc = new exl_paymentcalc();
        NPIvalidation = new exl_NPIvalidation();
        reportrepo = new exl_reportrepo();


    });

    beforeEach(function () {
        // Load credentials from the fixture
        cy.fixture('mywwsbm_data').then((mywwsbm_data) => {
            this.mywwsbm_data = mywwsbm_data;
        });
    });

    it('Home', function () {

        // URL
        link.Link(this.mywwsbm_data.External_URL);

        // Login details
        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password);
        loginPage.homepage(this.mywwsbm_data.home); // home navigations

        loginPage.GlobalSearch(this.mywwsbm_data.Patient_name); //Global Search
        loginPage.Filters(this.mywwsbm_data.Start_Date, this.mywwsbm_data.End_Date, this.mywwsbm_data.DeliveredOn,
            this.mywwsbm_data.Internal_FTP, this.mywwsbm_data.Caller, this.mywwsbm_data.Verifier);

    });

    it('Dashboard', function () {

        // URL
        link.Link(this.mywwsbm_data.External_URL);

        // Login details
        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password);

        // Dashboard
        dashboard.dashboard(this.mywwsbm_data.dashboard); //Dasboard Navigation
        dashboard.date_range(this.mywwsbm_data.Start_Date, this.mywwsbm_data.End_Date); //Date Range
        dashboard.filters(this.mywwsbm_data.State, this.mywwsbm_data.Product, this.mywwsbm_data.Status, this.mywwsbm_data.Insurance,
            this.mywwsbm_data.DeliveredOn, this.mywwsbm_data.Subsequent_VF, this.mywwsbm_data.Internal_FTP); //Dashboard Filters
        dashboard.Generate_Report(this.mywwsbm_data.Generate_Report, this.mywwsbm_data.fileName) //Generate Reports


    });

    it('Eligibility and Benefits (Data Groups)', function () {

        // URL
        link.Link(this.mywwsbm_data.External_URL);

        // Login Details
        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password);

        // sidebar Navigation to Data groups
        datagroups.datagroups(this.mywwsbm_data.EB, this.mywwsbm_data.Data_Groups);
        datagroups.searchbar(this.mywwsbm_data.DataGroup_ID);  // Top Searchbar
        datagroups.DGfilters();  // filters
        datagroups.chart();  //chart
        datagroups.chartDownload(this.mywwsbm_data.Download_Chart, this.mywwsbm_data.fileName);  // Chart Download
        datagroups.CHfilters();  //Chart Filter

    });

    it('Eligibility and Benefits (Chart Insights)', function () {

        // URL
        link.Link(this.mywwsbm_data.External_URL);

        // Login Details
        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password);

        chartinsights.chartinsights(this.mywwsbm_data.EB, this.mywwsbm_data.Charts_Insights); // Chart Insight Navigation
        chartinsights.CIfilters(); // filters
        chartinsights.chart(); //chart open
        datagroups.chartDownload(this.mywwsbm_data.Download_Chart, this.mywwsbm_data.fileName);  // Chart Download
        datagroups.CHfilters();  //Chart Filter

    });

    it('Eligibility and Benefits (All Chart View)', function () {

        //     URL
        link.Link(this.mywwsbm_data.External_URL);

        // Login Details
        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password);
        allchartview.AllChartView(this.mywwsbm_data.EB, this.mywwsbm_data.AllCharts_View); //All Chart View Navigation
        allchartview.PatientSearch(this.mywwsbm_data.Patient_name); // PAtient Search by name
        allchartview.filters(this.mywwsbm_data.AllCharts_View); //Filters
        allchartview.charts(); //open charts
        allchartview.ChartDownload(this.mywwsbm_data.Download_Chart, this.mywwsbm_data.fileName);

    });

    it('Settings (Notifications)', function () {

        //URL
        link.Link(this.mywwsbm_data.External_URL);

        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password);  // Login Details
        notifications.Notification(this.mywwsbm_data.Settings, this.mywwsbm_data.Notifications)
        notifications.SearchBar(this.mywwsbm_data.TopSearchBar);
        notifications.Status();
        notifications.DateRange(this.mywwsbm_data.startDate_Nofo, this.mywwsbm_data.endDate_Nofo);

    });

    it('Settings (Payer Exclusion List)', function () {

        // URL
        link.Link(this.mywwsbm_data.External_URL);

        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password); //login details
        exclusionlist.ExclusionList(this.mywwsbm_data.Settings, this.mywwsbm_data.PayerExclusionList); //Exclusion List Navigation
        exclusionlist.Download();
    });

    it('Settings (Report Repository)', function () {

        // URL
        link.Link(this.mywwsbm_data.External_URL);

        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password); // Login Details
        reportrepo.ReportRepo(this.mywwsbm_data.Settings, this.mywwsbm_data.Report_Repository);
        reportrepo.MonthlyReport(this.mywwsbm_data.FileName, this.mywwsbm_data.OK, this.mywwsbm_externmywwsbm_dataal.Confirm);
        reportrepo.WeeklyReport(this.mywwsbm_data.FileName, this.mywwsbm_data.OK, this.mywwsbm_data.Confirm);
        reportrepo.DailyReport(this.mywwsbm_data.RepoDate1, this.mywwsbm_data.RepoDate2, this.mywwsbm_data.FileName, this.mywwsbm_data.OK, this.mywwsbm_data.Confirm);
        // reportrepo.ManageReports(this.mywwsbm_data.Test);

    });

    it('Settings (Edit Profile)', function () {

        //URL
        link.Link(this.mywwsbm_data.External_URL);


        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password); // Login Details
        editprofile.EditProfile(this.mywwsbm_data.Settings, this.mywwsbm_data.Edit_Profile); //edit profile navigation
        editprofile.EditName(this.mywwsbm_data.F_name, this.mywwsbm_data.L_name);
        editprofile.EditToggle();
        editprofile.ChangePassword(this.mywwsbm_data.CA_password);

    });

    it('Settings (Recent History)', function () {

        //URL
        link.Link(this.mywwsbm_data.External_URL);

        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password);  // Login Details 
        recenthistory.RecentHistory(this.mywwsbm_data.Settings, this.mywwsbm_data.Recent_History); // recent history navigation
        recenthistory.Chart(); //view chart
        recenthistory.Filters(this.mywwsbm_data.Patient_name, this.mywwsbm_data.startDate_Nofo, this.mywwsbm_data.Primary_InsuranceNUM,
            this.mywwsbm_data.Primary_Insurance, this.mywwsbm_data.Chart_Status); //filters
    });

    it('Tools (Payment Calculator)', function () {

        //URL
        link.Link(this.mywwsbm_data.External_URL);
        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password);  // Login Details 
        paymentcalc.PaymentCalc(this.mywwsbm_data.Tools, this.mywwsbm_data.PaymentCalc); // PaymentCalc navigation
        paymentcalc.Form(this.mywwsbm_data.Num1, this.mywwsbm_data.Num2); // calc fields

    });

    it('Tools (NPI Validation)', function () {

        //URL
        link.Link(this.mywwsbm_data.External_URL);

        loginPage.login(this.mywwsbm_data.RM_username, this.mywwsbm_data.RM_password);  // Login Details 
        NPIvalidation.NPIValidation(this.mywwsbm_data.Tools, this.mywwsbm_data.NPI_nav); //NPI navigation
        NPIvalidation.NPI(this.mywwsbm_data.NPI_num); // Npi validation
        NPIvalidation.Download(); // Download physician details

    });


});
