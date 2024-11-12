import * as fs from 'node:fs';
import * as path from 'node:path';

export function getPortalURL() {
    const defaultValue = process.env.PORTAL_URL
    ? process.env.PORTAL_URL
    : 'http://localhost:8080';

    console.log(process.env.LIFERAY_ROUTES_DXP);

    const routesDXP = process.env.LIFERAY_ROUTES_DXP;

    if (!routesDXP) {
        console.log('NO ROUTES FOUND, using default');
        return defaultValue;
    }

    const mainDomainFilePath = path.join(routesDXP, "com.liferay.lxc.dxp.main.domain");
    const protocolFilePath = path.join(routesDXP, "com.liferay.lxc.dxp.server.protocol");

    try {
        const mainDomain = fs.readFileSync(mainDomainFilePath, {"encoding": "utf8"});
        console.log(`mainDomain: ${mainDomain}`);
        const protocol = fs.readFileSync(protocolFilePath, {"encoding": "utf8"});
        console.log(`protocol: ${protocol}`);

        if (!mainDomain || !protocol) {
            console.log('NO FILE CONTENT FOUND, using default');
            return defaultValue;
        }

        const portalURL = `${protocol.trim()}://${mainDomain.trim()}`;

        console.log(`Found files, here's the result: ${portalURL}`)

        return portalURL;
    }
    catch (err) {
        console.log('NO FILES FOUND, using default');
        return defaultValue;
    }
}