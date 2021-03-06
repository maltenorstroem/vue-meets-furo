// Initialize application env, theme, api
import { Init, Env } from '@furo/framework/src/furo.js';

/**
 * Use the installed spec if you finally have a separate spec project (recommended)
 */
import { Services, Types } from '@adcubum/adcubum-library-example-bff-spec/dist/env.js';

/**
 * Import custom icon set
 */
import './iconset.js';

/**
 * Register the available types (only needed if you work with @furo/data... components  )
 */
Init.registerApiServices(Services);
Init.registerApiTypes(Types);

Env.api.prefix = `/api`;

/**
 * Apply the prefix to all service deeplinks and to all furo.Reference types with defaults
 */
Init.applyCustomApiPrefixToServicesAndTypes(Env.api.prefix);
