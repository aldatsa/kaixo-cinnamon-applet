/**
 * /usr/share/cinnamon/js/
 */
const Applet = imports.ui.applet;

// The UUID (Universally Unique IDentifier) of your applet.
// Change this constant to something like the-name-of-your-applet@your-name-or-domain-name
// It must match the uuid on the metadata.json file and the name of the folder of your applet.
const APPLET_UUID = "cinnamon-applet-template";

// The directory of the applet. In this case is ~/.local/share/cinnamon/applets/cinnamon-applet-template
const APPLET_DIR = imports.ui.appletManager.appletMeta[APPLET_UUID].path;

function CinnamonAppletTemplate(metadata, orientation, panel_height, instance_id) {
    this._init(metadata, orientation, panel_height, instance_id);
}

CinnamonAppletTemplate.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(metadata, orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        this.set_applet_icon_path(APPLET_DIR + "/icon.png");
        this.set_applet_tooltip(_("Hello Cinnamon!"));
    }
};

function main(metadata, orientation, panel_height, instance_id) {
    return new CinnamonAppletTemplate(metadata, orientation, panel_height, instance_id);
}
