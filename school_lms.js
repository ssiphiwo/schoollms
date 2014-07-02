/* 
 * Copyright 2014 Modise Makhetha <modise@ekasiit.com>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 
 * @returns {school_lms_menu.items}
 */
function school_lms_menu() {
   
    try {
        var items = {
            metadata_add_form: {
                'title': 'Add Meta Data',
                'page_callback': 'drupalgap_get_form',
                'page_arguments': ['school_lms_add_metadata_form']
            },
            'userDevice': {
                'title': 'Load User Device',
                'page_callback': 'school_lms_userDevice_page',
                'pageshow': 'school_lms_userDevice_pageshow'
            },
            'userCount': {
                'title': 'Count APP Users',
                'page_callback': 'school_lms_userCount_page',
                'pageshow': 'school_lms_userCount_pageshow'
            },
            'deviceGPS': {
                'title': 'Device GPS Coordinates',
                'page_callback': 'school_lms_start_page',
                'pageshow': 'school_lms_deviceGPS_pageshow'
            },
            'start': {
                'title': 'SchoolLMS Support Development',
                'page_callback': 'school_lms_start_page'
            },
            dash: {
                title: 'Dashboard',
                page_callback: 'school_lms_dash_page'
            },
            data: {
                title: 'Data',
                page_callback: 'school_lms_data_page'
            },
            ssystem: {
                title: 'System',
                page_callback: 'school_lms_ssystem_page'
            },
            users: {
                title: 'Users',
                page_callback: 'school_lms_users_page'
            },
            security: {
                title: 'Security',
                page_callback: 'school_lms_security_page'
            },
            apps: {
                title: 'APPS',//school_lms_apps_page
                page_callback: 'school_lms_apps_page'
            }
        };
        return items;
  }
  catch (error) { console.log('school_lms_menu - ' + error); }
}

/**
 * 
 * @returns {school_lms_home_page.content}
 */
function school_lms_start_page() {
  try {
    var content = {};
//    content.site_info = {
//      markup: '<h4 style="text-align: center;">' +
//        Drupal.settings.site_path +
//      '</h4>'
//    };
    if (drupalgap.settings.logo) {
      content.logo = {
        markup: '<center>' +
                 theme('image', {path: drupalgap.settings.logo}) +
               '</center>'
      };
    };
    content.welcome = {
      markup: '<h2 style="text-align: center;">Welcome to SchoolLMS</h2>' +
        '<center><p>This is the Support Edition of all other SchoolLMS APPs</p></center>'
    };
    
    content.get_started = {
      theme: 'button_link',
      text: 'Dashboard',
      path: 'dash'
      //options: {InAppBrowser: true}
    };
    content.support = {
      theme: 'button_link',
      text: 'Help',
      path: 'http://supportdev.schoollms.net',
      options: {InAppBrowser: true}
    };
    return content;
  }
  catch (error) { console.log('school_lms_start_page - ' + error); }
}

/**
 * 
 * @returns {school_lms_dash_page.content}
 */
function school_lms_dash_page() {
    var content = {};
    
    content = {
        intro:{
            markup:'This is where a summary of all SUPPORT Development, Testing and Production issues will be tracked'
        },
        data_button:{
            path:"data",
            text: "Data",
            theme: "button_link"
        },
        system_button:{
            path:"ssystem",
            text: "System",
            theme: "button_link"
        },
        users_button:{
            path:"users",
            text: "Users",
            theme: "button_link"
        },
        security_button:{
            path:"security",
            text: "Security",
            theme: "button_link"
        },
        apps_button:{
            path:"apps",
            text: "Applications",
            theme: "button_link"
        },
        gps_button:{
            path:"deviceGPS",
            text: "GPS Testing",
            theme: "button_link"
        }
    };
    return content;
}

/**
 * 
 * @returns {school_lms_data_page.content}
 */
function school_lms_data_page() {
    //var systemdata = _school_lms_check_metadata('systemdata');
    var content = {};
    
    content['intro'] = {
            'markup': "This is the view provided to the Support Team to develop, test and manage the DATA module"
        };
        
    //Check If MetaData Table Exists
    
    //If TRUE
    //   --- Read All Data From MetaData
    //   --- If Data Exists
    //           ---- Foreach Data Show Button (This will be a table with View data, Add data)
    //   ---Show Add MetaData Button
    //IF FALSE
    //   ---Show Add MetaData Button
    content['metadata_form'] = {
        path:"metadata_add_form",
        text: "Add Meta Data",
        theme: "button_link"
    };
    
//    var content = {
//        intro :{
//            'markup': "This is the view provided to the Support Team to develop, test and manage the DATA module"
//        },
//        dash_button:{
//            path:"dash",
//            text: "Dashboard",
//            theme: "button_link"
//        },
//        metadata_button:{
//            path:"metadata",
//            text: "Meta Data",
//            theme: "button_link"
//        },
//        //if (_school_lms_check_data('systemdata')){
//            systemdata_button:{
//                path:"systemdata",
//                text: "System Data",
//                theme: "button_link"
//            },
//        //},
//        userdata_button:{
//            path:"userdata",
//            text: "User Data",
//            theme: "button_link"
//        },
//        securitydata_button:{
//            path:"securitydata",
//            text: "Security Data",
//            theme: "button_link"
//        },
//        appdata_button:{
//            path:"appdata",
//            text: "APP Data",
//            theme: "button_link"
//        }
//    };
    return content;
}

/**
 * 
 * @param {type} form
 * @param {type} form_state
 * @returns {unresolved}
 */
function school_lms_add_metadata_form(form, form_state){
    form.elements['dataname'] = {
        type: 'textfield',
        title: 'Data Name',
        required: true
    };
    
    form.elements['datafields'] = {
        type: 'text',
        title: 'Data Fields [field:type(size),..]',
        required: true
    };
    
    form.elements['submit'] = {
        type: 'submit',
        value: 'Add'
    };
    
    return form;
}

/**
 * 
 * @param {type} form
 * @param {type} form_state
 * @returns {undefined}
 */
function school_lms_add_metadata_form_validate(form, form_state){
    
    //Validate input - especially the DataFields
}

/**
 * 
 * @param {type} form
 * @param {type} form_state
 * @returns {undefined}
 */
function school_lms_add_metadata_form_submit(form, form_state){
    //Use A Service To Send Data to Server
    alert ('You typed data name:' + form_state.values.dataname + ' data fields:' + form_state.values.datafields);
    
    var form_data = {
        meta_data: form_state.values.dataname + '#' + form_state.values.datafields
    };
    
//    Drupal.services.call({
//        method: 'POST',
//        path: 'school_lms_resources/add_meta_data.json',
//        data: form_data,
//        success: function(result) {
//            //var user_count = result[0];
//            drupalgap_alert('MetaData ' + form_data.meta_data + ' Loaded Successfully');
//        },
//        error: function(error) {
//            drupalgap_alert('MetaData ' + form_data.meta_data + ' Loading Failed');
//        }
//
//    });
    school_lms_post_metadata({
        data: form_data,
        success: function(result) {
            //var user_count = result[0];
            drupalgap_alert('MetaData ' + form_data.meta_data + ' Loaded Successfully');
        },
        error: function(error) {
            drupalgap_alert('MetaData ' + form_data.meta_data + ' Loading Failed');
        }

    });
}

function school_lms_post_metadata(options) {
  try {
    options.method = 'POST';
    options.path = 'school_lms_resources/add_meta_data.json';
    options.service = 'school_lms';
    options.resource = 'add_meta_data';
    options.contentType = 'application/x-www-form-urlencoded';
    Drupal.services.call(options);
  }
  catch (error) { console.log('school_lms_post_metadata - ' + error); }
}

/**
 * 
 * @returns {school_lms_system_page.content}
 */
function school_lms_ssystem_page() {
    var content = {
        intro :{
            'markup': "This is the view provided to the Support Team to develop, test and manage the SYSTEM module"
        },
        dash_button:{
            path:"dash",
            text: "Dashboard",
            theme: "button_link"
        },
        services_button:{
            path:"services",
            text: "System Services",
            theme: "button_link"
        },
        utilities_button:{
            path:"utilities",
            text: "System Utilities",
            theme: "button_link"
        },
        config_button:{
            path:"config",
            text: "System Config",
            theme: "button_link"
        },
        boot_button:{
            path:"boot",
            text: "System Boot Sequence",
            theme: "button_link"
        },
        partition_button:{
            path:"partition",
            text: "System Partition",
            theme: "button_link"
        }
    };
    return content;
}


/**
 * 
 * @returns {school_lms_users_page.content}
 */
function school_lms_users_page() {
    var content = {
        intro :{
            'markup': "This is the view provided to the Support Team to develop, test and manage the USER module"
        },
        dash_button:{
            path:"dash",
            text: "Dashboard",
            theme: "button_link"
        },
        device_button:{
            path:"userDevice",
            text: "Load User Device",
            theme: "button_link"
        },
        update_button:{
            path:"updateuserDevice",
            text: "Update User Device",
            theme: "button_link"
        }
    };
    return content;
}

/**
 * 
 * @returns {school_lms_security_page.content}
 */
function school_lms_security_page() {
    var content = {
        intro :{
            'markup': "This is the view that the Support Team will use to develop, test and manage the SECURITY module "
        },
        dash_button:{
            path:"dash",
            text: "Dashboard",
            theme: "button_link"
        },
        track_button:{
            path:"track",
            text: "Track Device",
            theme: "button_link"
        },
        flash_button:{
            path:"flash",
            text: "Flash Device",
            theme: "button_link"
        },
        wipe_button:{
            path:"wipe",
            text: "Wipe Device",
            theme: "button_link"
        },
        lock_button:{
            path:"lock",
            text: "Lock Device",
            theme: "button_link"
        },
        report_button:{
            path:"report",
            text: "Report Device",
            theme: "button_link"
        }
        
    };
    return content;
}

/**
 * 
 * @returns {school_lms_apps_page.content}
 */
function school_lms_apps_page() {
    var content = {
        intro :{
            'markup': "This is the view aimed at tracking and monitor all user statuses"
        },
        dash_button:{
            path:"dash",
            text: "Dashboard",
            theme: "button_link"
        },
        users_button:{
            path: "userCount",
            text: "Count APP Users",
            theme: "button_link"
        },
        build_button:{
            path: "buildAPP",
            text: "Build APP",
            theme: "button_link"
        },
        test_button:{
            path: "testAPP",
            text: "Test APP",
            theme: "button_link"
        },
        publish_button:{
            path: "publishAPP",
            text: "Publish APP",
            theme: "button_link"
        }
        
    };
    return content;
}

/**
 * 
 * @returns {school_lms_block_info.blocks}
 */
//function school_lms_block_info(){
//    var blocks = {
//        logo_block: {
//            delta: 'logo_block',
//            module: 'school_lms'
//        },
//         tab_block: {
//            delta: 'tab_block',
//            module: 'school_lms'
//        },
//         tab_list_block: {
//            delta: 'tab_list_block',
//            module: 'school_lms'
//        },
//        list_items_block: {
//            delta: 'list_item_block',
//            module: 'school_lms'
//        },
//        developed_by_block:{
//            delta: 'developed_by_block',
//            module: 'school_lms'
//        }
//        
//    };
//    return blocks;
//}
//
//function school_lms_block_view(delta) {
//  try {
//    switch (delta) {
//      case 'main_view':
//        // This is the main content block, it is required to be in a theme's
//        // region for the content of a page to show up (nodes, users, taxonomy,
//        // comments, etc). Depending on the menu link router, we need to route
//        // this through the appropriate template files and functions.
//        return drupalgap_render_page();
//        break;
//      case 'messages_views':
//        // If there are any messages waiting to be displayed, render them, then
//        // clear out the messages array.
//        var html = '';
//        if (drupalgap.messages.length == 0) { return html; }
//        $.each(drupalgap.messages, function(index, msg) {
//            html += '<div class="messages ' + msg.type + '">' +
//              msg.message +
//            '</div>';
//        });
//        drupalgap.messages = [];
//        return html;
//        break;
//      case 'logo_view':
//        if (drupalgap.settings.logo) {
//          return '<div>' +
//            l(theme('image', {'path': drupalgap.settings.logo}), '') +
//          '</div>';
//        }
//        return '';
//        break;
//      case 'title_view':
//        var title_id = system_title_block_id(drupalgap_path_get());
//        return '<h1 id="' + title_id + '"></h1>';
//        break;
//      case 'developed_by':
//        return '<p style="text-align: center;"> Developed By ' + l('EKASIIT', 'http://www.ekasiit.com', {InAppBrowser: true}) + ' - Inspired By ' + l('SunwardParkHS', 'http://www.sphs.co.za', {InAppBrowser: true}) + 'Powered by: ' +
//          l('DrupalGap', 'http://www.drupalgap.org', {InAppBrowser: true}) +
//        '</p>';
//        break;
//      case 'help_view':
//        return l('Help', 'http://supportdev.schoollms.net');
//        break;
//      default:
//        return '';
//        break;
//    }
//  }
//  catch (error) { console.log('system_block_info - ' + error); }
//}

//function school_lms_block_view(delta, region){
//    var content = '';
//    if (delta === 'logo_block'){
//        content = "<img src='app/themes/schoollms_theme/images/school_lms.png'><h2> Support Development </h2>  ";
//    };
//    if (delta === 'tab_block'){
//        content = "<h2> Tabs View </h2>";
//    };
//    if (delta === 'tab_list_block'){
//        content = "<h2> Tab List View </h2>";
//    };
//    if (delta === 'list_items_block'){
//        content = "<h2> List Items View </h2>";
//    };
//    if (delta === 'developed_by_block'){
//        content = "Developed By <a href='www.ekasiit.com'> Ekasi IT Solution </a> - Inspired By <a href='www.sphs.co.za'> Sunward Park High School </a>";
//    };
//    return content;
//}

/**
 * 
 * @returns {school_lms_userCount_page.content}
 */
function school_lms_userCount_page() {
  try {
    var content = {};
    content['intro'] = {
      markup: "<p>Retrieving user count...</p>"
    };
    return content;
  }
  catch (error) { console.log('school_lms_userCount_page - ' + error); }
}

/**
 * 
 * @returns {undefined}
 */
function school_lms_userCount_pageshow(){
    
    try {
        school_lms_get_user_count({
            success: function(result) {
                        var user_count = result[0];
                        alert('There are ' + user_count + ' registered user(s)!');
                    },
            error: function (error) {
                        drupalgap_alert(
                        'Code: '    + error.code    + '\n' +
                        'Message: ' + error.message + '\n'
                        );
                    }
            });
    } catch (error) { console.log('school_lms_userCount_pageshow - ' + error); }
            
}

/**
 * 
 * @param {type} options
 * @returns {undefined}
 */
function school_lms_get_user_count(options) {
  try {
    options.method = 'POST';
    options.path = 'school_lms_resources/get_user_count.json';
    options.service = 'school_lms';
    options.resource = 'get_user_count';
    Drupal.services.call(options);
  }
  catch (error) { console.log('school_lms_get_user_count - ' + error); }
}


//function _school_lms_load_device() {
//    
//    //drupalgap_alert('I get here - load device');
//    
//    //Get Device Information
//    //Get MAC
//    var mac_address = device.uuid;
//    
//    //Get GPS Data
//    var gps = _school_lms_get_device_gps();
//    
//    //Get Device IP
//    var ip = '0.0.0.0';
//    
//    drupalgap_alert(
//                        'Device UUID: '    + mac_address    + '\n' +
//                        'GPS Postion: '    + gps            + ' \n' +
//                        'IP Address: '    + ip            + ' \n'
//                        );
//                
//    var device_info = {
//        device_data: mac_address + ':' + gps + ':' + ip
//    };
//    
//    //drupalgap_alert('Device Info ' + device_info);
//    
//    school_lms_load_user_device(device_info);
////    school_lms_load_user_device({
////     
////        data: device_info,
////        success: function(result) {
////            //var user_count = result[0];
////            drupalgap_alert('Device ' + device_info.device_data + ' Loaded Successfully');
////        },
////        error: function(error){
////            drupalgap_alert('Device ' + device_info.device_data + ' Loading Failed');
////        }
////                
////    });
//
//}

function school_lms_userDevice_page() {
  try {
    var content = {};
    content['intro'] = {
      markup: "<p>Retrieving user device...</p>"
    };
    return content;
  }
  catch (error) { console.log('school_lms_userDevice_page - ' + error); }
}

/**
 * 
 * @returns {undefined}
 */
function school_lms_userDevice_pageshow() {

    try {
        //drupalgap_alert('I get here - pageshow');
        //_school_lms_load_device();
        navigator.geolocation.getCurrentPosition(
                // Success
                        function(position) {
                            var lat = position.coords.latitude;
                            var longi = position.coords.longitude;
                            var ptime = position.timestamp;
                            var gps = lat + ',' + longi + ',' + ptime;
                            //this.latitude = lat;
                            //this.longitude = longi;

                            //Get Device Information
                            //Get MAC
                            var mac_address = device.uuid;

                            //Get GPS Data
                            //var gps = _school_lms_get_device_gps();

                            //Get Device IP
                            var ip = '0.0.0.0';

                            drupalgap_alert(
                                    'Device UUID: ' + mac_address + '\n' +
                                    'GPS Postion: ' + gps + ' \n' +
                                    'IP Address: ' + ip + ' \n'
                                    );

                            var device_info = {
                                device_data: mac_address + ':' + gps + ':' + ip
                            };

                            //drupalgap_alert('Device Info ' + device_info);

                            //school_lms_load_user_device(device_info);
                            //Load User Device Info
                            school_lms_load_user_device({
                                data: device_info,
                                success: function(result) {
                                    //var user_count = result[0];
                                    drupalgap_alert('Device ' + device_info.device_data + ' Loaded Successfully');
                                },
                                error: function(error) {
                                    drupalgap_alert('Device ' + device_info.device_data + ' Loading Failed');
                                }

                            });
                            //'Altitude: '          + position.coords.altitude          + '\n' +
                            //'Accuracy: '          + position.coords.accuracy          + '\n' +
                            //'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                            //'Heading: '           + position.coords.heading           + '\n' +
                            //'Speed: '             + position.coords.speed             + '\n' +
                            //'Timestamp: '         + position.timestamp                + '\n'
                            //drupal_alert('in getCurrentPosition Latitude: ' + latitude + ' Longitude: ' + longitude);
                        },
                        // Error
                                function(error) {
                                    drupalgap_alert(
                                            'Code: ' + error.code + '\n' +
                                            'Message: ' + error.message + '\n'
                                            );
                                }
                        );
                
                        //Get User Device Info
//                        school_lms_get_user_device({
//                            success: function(result) {
//                                var user_device = result[0];
//                                drupalgap_alert('This is your device ' + user_device + ' from server!');
//                            },
//                            error: function(error) {
//                                drupalgap_alert(
//                                        'Code: ' + error.code + '\n' +
//                                        'Message: ' + error.message + '\n'
//                                        );
//                            }
//                        });
                    } catch (error) {
                console.log('school_lms_userDevice_pageshow - ' + error);
            }

        }


/**
 * 
 * @returns {school_lms_deviceGPS_page.content}
 */
function school_lms_deviceGPS_page() {
  try {
    var content = {};
    content['intro'] = {
      markup: "<p>Retrieving current position...</p>"
    };
    return content;
  }
  catch (error) { console.log('school_lms_deviceGPS_page - ' + error); }
}

/**
 * 
 * @returns {undefined}
 */
function school_lms_deviceGPS_pageshow() {
  try {
     navigator.geolocation.getCurrentPosition(
      // Success
      function (position) {
        drupalgap_alert(
          'Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n'
        );
      },
      // Error
      function (error) {
        drupalgap_alert(
          'Code: '    + error.code    + '\n' +
          'Message: ' + error.message + '\n'
        );
      }
    );
  }
  catch (error) { console.log('school_lms_deviceGPS_pageshow - ' + error); }
}

function _school_lms_load_device() {
    
      //drupalgap_alert('I get here - get device gps');
      
      //var latitude = 0;
      //var longitude = 0;
      //var gps = "0,0,time"; 
      navigator.geolocation.getCurrentPosition(
        // Success
        function (position) {
           var lat = position.coords.latitude;
           var longi = position.coords.longitude;
           var ptime = position.timestamp;
           var gps = lat + ',' + longi + ',' + ptime;
           //this.latitude = lat;
           //this.longitude = longi;
           
           //Get Device Information
            //Get MAC
            var mac_address = device.uuid;
    
            //Get GPS Data
            //var gps = _school_lms_get_device_gps();
    
            //Get Device IP
            var ip = '0.0.0.0';
    
//            drupalgap_alert(
//                        'Device UUID: '    + mac_address    + '\n' +
//                        'GPS Postion: '    + gps            + ' \n' +
//                        'IP Address: '    + ip            + ' \n'
//                        );
                
            var device_info = {
                device_data: mac_address + ':' + gps + ':' + ip
            };
    
            //drupalgap_alert('Device Info ' + device_info);
    
            //school_lms_load_user_device(device_info);
                school_lms_load_user_device({
                 
                    data: JSON.stringify(device_info),
                    success: function(result) {
                        //var user_count = result[0];
                        drupalgap_alert('Device ' + device_info.device_data + ' Loaded Successfully');
                    },
                    error: function(error){
                        drupalgap_alert('Device ' + device_info.device_data + ' Loading Failed with error '+ error);
                    }
                            
                });
          //'Altitude: '          + position.coords.altitude          + '\n' +
          //'Accuracy: '          + position.coords.accuracy          + '\n' +
          //'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          //'Heading: '           + position.coords.heading           + '\n' +
          //'Speed: '             + position.coords.speed             + '\n' +
          //'Timestamp: '         + position.timestamp                + '\n'
          //drupal_alert('in getCurrentPosition Latitude: ' + latitude + ' Longitude: ' + longitude);
        },
        // Error
        function (error) {
            drupalgap_alert(
                'Code: '    + error.code    + '\n' +
                'Message: ' + error.message + '\n'
            );
        }
     );
     
     //drupalgap_alert('Latitude: ' + latitude + ' Longitude: ' + longitude);
     
     //return gps;
}

function school_lms_load_user_device(options) {
  try {
    options.method = 'POST';
    options.path = 'school_lms_resources/load_device_data.json';
    options.service = 'school_lms';
    options.resource = 'load_device_data';
    Drupal.services.call(options);
  }
  catch (error) { console.log('school_lms_load_user_device - ' + error); }
}


function school_lms_get_user_device(options) {
  try {
    options.method = 'POST';
    options.path = 'school_lms_resources/get_user_device.json';
    options.service = 'school_lms';
    options.resource = 'get_user_device';
    Drupal.services.call(options);
  }
  catch (error) { console.log('school_lms_get_user_device - ' + error); }
}
