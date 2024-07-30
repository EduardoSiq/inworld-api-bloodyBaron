import { Continuation } from '../../../proto/ai/inworld/packets/packets.pb';
import { PreviousDialog } from '../../../src/entities/continuation/previous_dialog.entity';
import { SessionContinuation } from '../../../src/entities/continuation/session_continuation.entity';
import { phrases, previousDialog } from '../../helpers';

describe('Previous Dialog', () => {
  test('should get session dialog', () => {
    const sessionContinuation = new SessionContinuation({
      previousDialog: phrases,
    });

    expect(sessionContinuation.previousDialog).toEqual(previousDialog);
  });

  test('should convert proto to external object', () => {
    const proto: Continuation = {
      dialogHistory: previousDialog.toProto(),
    };

    expect(previousDialog).toEqual(
      PreviousDialog.fromProto(proto.dialogHistory!),
    );
  });
});
