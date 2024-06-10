import { OfflineAvatar, OnlineAvatar } from '../../Avatar/Avatar';
import { AvatarType } from '../../../services/avatar/type';

interface FriendsProps {
  data: AvatarType;
}

export const FriendsAvatar = ({ data }: FriendsProps, online) => {
  if (online) {
    return <OnlineAvatar data={data} />;
  } else {
    return <OfflineAvatar data={data} />;
  }
};
