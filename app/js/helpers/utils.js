import {constants} from 'js/helpers/constants';

var singleAPI = constants.singleAPI;
var apiKey = '?api_key=' + constants.apiKey;

var utils = {
    loadFile(templateFile){
        var tplHTML = '';
        $.ajax({
            dataType: "html",
            url: templateFile,
            async: false,
            success: (html) => { tplHTML = html }
        });
        return tplHTML;
    },

    comifyArray(content) {
        if( content.length < 2 ) return content[0];
        return content.reduce((p, c) => {
            p = (_.isObject(p)) ? p.name : p;
            return p + ', ' + c.name;
        });
    },

    createMovieUrl: (id) => `${singleAPI}${id}${apiKey}`,

    // Make an element active by adding an active class and removing it from its siblings
    makeActive: ($el) => $el.addClass('active').siblings().removeClass('active')
};

export {utils};
