import {EvidenceDOTS, EvidencePRINTS, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Phantom: Ghost = {
    codeName: 'Phantom',
    name: 'Фантом',
    evidences: [EvidenceRADIO, EvidencePRINTS, EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Phantom;
