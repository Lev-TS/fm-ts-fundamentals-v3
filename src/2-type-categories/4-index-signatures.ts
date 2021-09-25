// index signature
    {
        const phones: {
            [k: string]: {
                country: string;
                area: string;
                number: string;
            };
        } = {
            home: { country: '+1', area: '211', number: '652-4515' },
            work: { country: '+1', area: '670', number: '752-5856' },
            fax: { country: '+1', area: '322', number: '525-4357' },
        };
    
        phones.fax;

        // it can be so that we want mobile property from phone dictionary but it doesn't exist there.
        // Nontheless if we try to access number property on the mobile object, ts won't warn us.
        
        // e.g.this will brake the code but won't through error
        phones.mobile.number 
    }


    // BEST Practices    
        {
            // to avoid this issue with undefined index we could indicate that it can be undefined
            const phones: {
                [k: string]: {
                    country: string;
                    area: string;
                    number: string;
                } | undefined;
            } = {
                home: { country: '+1', area: '211', number: '652-4515' },
                work: { country: '+1', area: '670', number: '752-5856' },
                fax: { country: '+1', area: '322', number: '525-4357' },
            };
    
            // now this shows errors and requires us to handle a possible undefined case
            phones.mobile.number; 
            phones.mobile?.number;
        }
    
    //

//


