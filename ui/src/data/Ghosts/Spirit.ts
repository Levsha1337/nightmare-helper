import {EvidenceBOOK, EvidenceEMF5, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Spirit: Ghost = {
    codeName: 'Spirit',
    name: 'Дух',
    evidences: [EvidenceEMF5, EvidenceRADIO, EvidenceBOOK],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Spirit;
