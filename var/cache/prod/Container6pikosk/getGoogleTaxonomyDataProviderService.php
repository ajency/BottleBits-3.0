<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'PrestaShop\Module\PsEventbus\Provider\GoogleTaxonomyDataProvider' shared service.

return $this->services['PrestaShop\\Module\\PsEventbus\\Provider\\GoogleTaxonomyDataProvider'] = new \PrestaShop\Module\PsEventbus\Provider\GoogleTaxonomyDataProvider(${($_ = isset($this->services['PrestaShop\\Module\\PsEventbus\\Repository\\GoogleTaxonomyRepository']) ? $this->services['PrestaShop\\Module\\PsEventbus\\Repository\\GoogleTaxonomyRepository'] : $this->load('getGoogleTaxonomyRepositoryService.php')) && false ?: '_'}, ${($_ = isset($this->services['ps_eventbus.context']) ? $this->services['ps_eventbus.context'] : $this->load('getPsEventbus_ContextService.php')) && false ?: '_'});
