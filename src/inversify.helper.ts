import container from './inversify.config';

export const bindDependencies = function bindDependenciesToFunction<T>(
  func: (...args: unknown[]) => unknown,
  dependencies: symbol[],
) {
  const injections = dependencies.map((dependency) => {
    return container.get(dependency);
  });

  return func.bind(func, ...injections) as T;
};
