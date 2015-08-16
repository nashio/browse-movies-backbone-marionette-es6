import {constants} from 'js/utils/constants';

var singleAPI = constants.singleAPI;
var apiKey = '?api_key=' + constants.apiKey;

var helpers = {
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

    createMovieUrl: (id) => `${singleAPI}${id}${apiKey}`,

    // Make an element active by adding an active class and removing it from its siblings
    makeActive: ($el) => $el.addClass('active').siblings().removeClass('active')
};

export {helpers};
