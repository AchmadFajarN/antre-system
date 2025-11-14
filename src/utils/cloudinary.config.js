import { Cloudinary } from '@cloudinary/url-gen';

export const CLD_NAME = 'dyibd55rx'

const Cld = new Cloudinary({
    cloud: {
        cloudName: CLD_NAME
    }
})

export default Cld