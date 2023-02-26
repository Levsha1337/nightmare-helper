import {EvidenceDOTS, EvidenceEMF5, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Wraith: Ghost = {
    codeName: 'Wraith',
    name: 'Мираж',
    evidences: [EvidenceEMF5, EvidenceRADIO, EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Wraith;
