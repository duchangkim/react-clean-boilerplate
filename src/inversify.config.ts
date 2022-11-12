import { Container } from 'inversify';

import { AUTH_SERVICE_IDENTIFIER } from '@/constants/identifier';

import { AuthenticateRepository } from './domains/user/adapter/out/authenticateRepository';
import { useUserStorage } from './domains/user/adapter/out/authenticateAdapter';

const container = new Container({ autoBindInjectable: true });

container.bind(AUTH_SERVICE_IDENTIFIER.AuthenticatePort).toConstantValue(new AuthenticateRepository());
container.bind(AUTH_SERVICE_IDENTIFIER.UpdateUserPort).toFunction(useUserStorage);

export default container;
