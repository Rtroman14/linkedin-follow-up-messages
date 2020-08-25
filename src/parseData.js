module.exports = (csvData) => {
    let newData = [];

    csvData.forEach(async (row, index) => {
        let contact = {};
        let from = row[0];
        let to = row[1];
        let date = row[2];
        let direction = row[5];

        if (direction === "OUTGOING") {
            await csvData.forEach(async (record) => {
                let fromName = record[0];
                let dateTime = record[2];

                if (to == fromName && date > dateTime) {
                    contact.name = fromName;
                    contact.date = date;
                    await newData.push(contact);
                    return;
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
