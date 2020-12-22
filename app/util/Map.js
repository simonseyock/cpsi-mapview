/**
 * Util class for map related functions.
 *
 * @class CpsiMapview.util.Map
 */
Ext.define('CpsiMapview.util.Map', {
    alternateClassName: 'MapUtil',
    requires: [],
    singleton: true,

    disableCount: 0,

    toggleDefaultClickEnabled: function (map, toggle) {
        if (toggle) {
            this.disableCount--;
        } else {
            this.disableCount++;
        }
        map.set('defaultClickEnabled', this.disableCount === 0);
    }
});