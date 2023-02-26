import {EvidenceBOOK, EvidenceDOTS, EvidenceORB} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Thaye: Ghost = {
    codeName: 'Thaye',
    name: 'Тайэ',
    evidences: [EvidenceORB, EvidenceBOOK, EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Thaye;
