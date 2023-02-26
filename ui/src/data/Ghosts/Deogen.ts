import {EvidenceBOOK, EvidenceDOTS, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Deogen: Ghost = {
    codeName: 'Deogen',
    name: 'Деоген',
    evidences: [EvidenceRADIO, EvidenceBOOK, EvidenceDOTS],
    evidenceRequired: EvidenceRADIO,
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Deogen;
