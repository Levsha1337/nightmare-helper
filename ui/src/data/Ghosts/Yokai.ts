import {EvidenceDOTS, EvidenceORB, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Yokai: Ghost = {
    codeName: 'Yokai',
    name: 'Ёкай',
    evidences: [EvidenceRADIO, EvidenceORB, EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Yokai;
