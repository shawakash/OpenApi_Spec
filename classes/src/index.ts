import { DateTime } from 'luxon';
import { measure, once } from 'helpful-decorators'

class OpenApi extends Date {
    private timeZone: string;
    constructor(timeZone: string) {
        super();
        this.timeZone = timeZone;
    }
    @once
    @measure
    time() {
        const dateTime = DateTime.now().setZone(this.timeZone);
        const currentTime = dateTime.toLocaleString(DateTime.TIME_SIMPLE);
        console.log(currentTime);
        return currentTime;
    }

}

const instanceObject = new OpenApi('Asia/Kolkata');

instanceObject.time();
instanceObject.time();
instanceObject.time();
instanceObject.time();
instanceObject.time();
    
