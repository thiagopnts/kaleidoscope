import utils from './utils'

import {ThreeSixtyVideoViewer} from './three_sixty_video_viewer'
import {IEThreeSixtyVideoViewer} from './ie_three_sixty_video_viewer'
import {IPhoneThreeSixtyVideoViewer} from './iphone_three_sixty_video_viewer'



let video = options => {
    if (utils.isIE()) {
        return new IEThreeSixtyVideoViewer(options);
    } else if (utils.isiPhone()) {
        return new IPhoneThreeSixtyVideoViewer(options);
    } else {
        return new ThreeSixtyVideoViewer(options);
    }
}

export {video as Video};


