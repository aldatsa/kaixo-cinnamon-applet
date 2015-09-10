/**
 * /usr/share/cinnamon/js/
 */
const Applet = imports.ui.applet;

const AppletDir = imports.ui.appletManager.appletMeta["kaixo-cinnamon-applet@aldatsa"].path;

function KaixoMundua(orientation, panel_height, instance_id) {
    this._init(orientation, panel_height, instance_id);
}

KaixoMundua.prototype = {
    __proto__: Applet.IconApplet.prototype,

    __init__: function(orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype.__init__.call(this, orientation, panel_height, instance_id);

        // Ikonoa "Gehitu applet-ak panelari" menuan agertzen da baina ez erretiluan. Zergatik?
        this.set_applet_icon_path(AppletDir + "/icon.png");
        this.set_applet_tooltip(_("Kaixo mundua"));
    }
};

function main(metadata, orientation, panel_height, instance_id) {
    return new KaixoMundua(orientation, panel_height, instance_id);
}
