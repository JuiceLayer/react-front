import { FC } from 'react';

import Data from './DestinationsData'

//components
import Destination from "./Destination/Destination"

//style
import * as S from './Destinations.style';

console.log(Data)
const Destinatons: FC = ( ) => {

    const destinations = Data.map(item => {
        return (
            <Destination
                CityName={item.CityName}
                CityID={item.CityID}/>
        )
    })
    return (
        <S.Container>
            <S.Grid>
                {destinations}
            </S.Grid>
        </S.Container>
    );
};

export default Destinatons;
