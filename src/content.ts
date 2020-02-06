import fs from "fs";
import http from "http";
import url from "url";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>JedlikTsTemplate</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        const szőnyeg = "Perzsa";
        const van = true;
        const szín: Array<string> = ["Vörös", "Zöld", "Sárga"];
        const darab = 57;
        const dimenziók: [number, number] = [120, 80];
        enum Típus {
            Lábtörlő
        }
        let név: string;
        const nemtudom: any = false;

        res.write(`${szőnyeg} ${van} ${szín} ${darab} ${dimenziók} ${nemtudom}`);

        res.write("</pre></form></body></html>");
        res.end();
    }
}
