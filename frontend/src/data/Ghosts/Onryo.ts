import {EvidenceORB, EvidenceRADIO, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Onryo: Partial<Ghost> = {
    codeName: 'Onryo',
    name: 'Онрё',
    evidences: [EvidenceRADIO, EvidenceORB, EvidenceTEMP]
};

export default Object.assign({}, defaultGhostConfig, Onryo) as Ghost;
