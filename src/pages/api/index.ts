import { NextApiRequest, NextApiResponse } from "next";
import { TLSSocket } from "tls";

export default function certChecker(req: NextApiRequest, res: NextApiResponse) {
  const tls = req.socket as TLSSocket;
  if (tls.authorized) {
    res.writeHead(200);
    const clientCert = tls.getPeerCertificate();

    // Read the certificate data
    const subject = clientCert.subject;
    const issuer = clientCert.issuer;
    const validFrom = clientCert.valid_from;
    const validTo = clientCert.valid_to;

    // Use the certificate data as needed
    return res.status(200).end(
      `The client certificate was issued to ${subject.CN} by ${issuer.CN} and is valid from ${validFrom} to ${validTo}.`
    );
  }

  return res.status(401).end("Invalid client certificate authentication.");
}