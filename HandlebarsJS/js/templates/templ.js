(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"footer\"><!-- Footer Template -->\r\n<footer>\r\n    <div class=\"row\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-4 footer-company-logo\">\r\n                <div class=\"footer-logo\">\r\n                    <img src=\"/images/sanofilogo.png\" alt=\"Sanofi Logo\" title=\"Sanofi Genzyme\">\r\n                </div>\r\n\r\n                <div class=\"footer-logo-link\">\r\n                    <a href=\"http://www.cerdelga.com/\" class=\"anchor-btn\" target=\"_blank\">Visit the Cerdelga<sup>®</sup> website</a>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-8 footer-details\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 adverse-details\">\r\n                        <p>\r\n                            <span class=\"inverted-triangle\">▼</span>Cerdelga® (eliglustat) is subject to additional monitoring. This will allow quick identification of new safety information. Reporting any suspected adverse reactions is important for the continued monitoring of the benefit/risk balance of all medicinal products.\r\n                            You are asked to report any suspected adverse reactions via the appropriate national reporting system and contact Sanofi Genzyme.\r\n                        </p>\r\n\r\n                        <p>\r\n                            <strong>In the UK:</strong> Yellow Card Scheme.<a href=\"http://www.mhra.gov.uk/yellowcard\" target=\"_blank\" title=\"MHRA Gov Yellowcard\">www.mhra.gov.uk/yellowcard</a>. Suspected adverse reactions should also be reported to Sanofi Genzyme.\r\n                            Tel: +44 (0) 800 090 2314. Alternatively, send via E-mail to: <a href=\"mailto:uk-drugsafety@sanofi.com\" title=\"Uk Drug Safety\"> UK-drugsafety@sanofi.com</a>\r\n                        </p>\r\n\r\n                        <!--<p>\r\n                            <strong>In Ireland:</strong> HPRA Pharmacovigilance, Earlsfort Terrace, IRL - Dublin 2. Tel: +353 1 6764971; Fax: +353 1 6762517.\r\n                            Website:<a href=\"http://www.hpra.ie\" target=\"_blank\" title=\"HPRA Ireland\"> www.hpra.ie</a>. E-mail:<a href=\"mailto:medsafety@hpra.ie\" target=\"_blank\" title=\"med Safety Ireland\"> medsafety@hpra.ie</a>.\r\n                            Suspected adverse reactions should be reported to Sanofi Genzyme: Tel: +353 1 403 5600. Alternatively, send via E-mail to:<a href=\"mailtol:IEPharmacovigilance@sanofi.com\" title=\"IE Pharmacovigilance Sanofi\"> IEPharmacovigilance@sanofi.com</a>\r\n                        </p>-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"post-footer\">\r\n        <div class=\"row\">\r\n            <div class=\"container\">\r\n                <div class=\"col-md-5 post-footer-left\">\r\n                    <ol>\r\n\r\n                        <li class=\"col-md-12\"><a href=\"#\">Contact Us</a> If there are problems with the site </li>\r\n                    </ol>\r\n\r\n                    <div class=\"post-footer-copyright\">\r\n                        <p>Copyright © 2016 Genzyme Corporation. All rights reserved.</p>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-7 post-footer-right\">\r\n                    <ol>\r\n                        <li><a href=\"#\" class=\"prescribing\">UK Prescribing Information</a></li>\r\n                        <li><a href=\"#\" class=\"privacy\">Privacy Policy</a></li>\r\n                        <li><a href=\"#\" class=\"terms\">Terms and Conditions</a></li>\r\n                        <li><a href=\"#\" class=\"cookie\">Cookie Policy</a></li>\r\n                    </ol>\r\n\r\n                    <div class=\"post-footer-jobcode\">\r\n                        <p>GZUK.CERD.17.03.0181m. Date of preparation: September 2017</p>\r\n                        <p>Last updated: 13/09/2017</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer></div>";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\r\n    <div class=\"row\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-3 logo\">\r\n                <h1>\r\n                    <a href=\"/\">\r\n                        <img src=\"/images/logo.png\" alt=\"Cerdelga Live\" title=\"Back to Home\">\r\n                    </a>\r\n\r\n                </h1>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 header-title\">\r\n                <h3>\r\n                    Cerdelga<sup>®</sup> Life\r\n                    <p>This website is intended for use by UK healthcare professionals only</p>\r\n                </h3>\r\n            </div>\r\n\r\n            <nav class=\"col-md-3 header-nav hide-me\">\r\n                <ol>\r\n                    <li class=\"profile-link\">\r\n                        <a href=\"#\" title=\"View Profile\" class=\"link-profile\" data-id=\"0\">Jane</a> <!--Get the Data-id from login signup assign-->\r\n                    </li>\r\n                    <li class=\"logout-link\">\r\n                        <a href=\"/\" title=\"Logout\" class=\"link-logout\">Log out</a>\r\n                    </li>\r\n                </ol>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n</header>";
},"useData":true});
})();