module.exports = (csvData) => {
    let newData = [];
    let contactNames = [];
    const client = "Tony Poole";
    csvData.forEach((rowOutter) => {
        let contact = {};
        let fromOutter = rowOutter[2];
        let toOutter = rowOutter[3];
        let dateOutter = rowOutter[4];
        // client sent message to contact
        if (fromOutter === client && !contactNames.includes(toOutter)) {
            csvData.forEach((rowInner) => {
                let dateInner = rowInner[4];
                let fromInner = rowInner[2];
                let toInner = rowInner[3];
                if (dateInner < dateOutter) {
                    // if contact sent message to client
                    if (toOutter === fromInner && !contactNames.includes(toOutter)) {
                        contact.name = toOutter;
                        contact.date = dateOutter.slice(0, 10);
                        contactNames.push(toOutter);
                        newData.push(contact);
                    }
                }
            });
        }
    });
    return newData;
};

// FOLLOW-UP MESSAGE SENT?

// outgoing message > incoming message
//  outoing { to }
//  incoming { from }
