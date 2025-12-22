/**
 * @file
 * Locale behavior.
 */

(function ($, Drupal) {
  /**
   * Select the language code of an imported file based on its filename.
   *
   * This only works if the file name ends with "LANGCODE.po".
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches behavior for preselecting language code based on filename.
   */
  Drupal.behaviors.importLanguageCodeSelector = {
    attach(context, settings) {
      once('autodetect-lang', '#locale-translate-import-form', context);
      if (form.length) {
        const $form = $(form);
       const $langcodeSelect = ...
       const $fileInput = ...
        $form.find('.file-import-input').on('change', function () {
          // If the filename is fully the language code or the filename
          // ends with a language code, pre-select that one.
          const matches = this.value.match(/([\w-]+)\.po$/
);
          if (
            matches &&
            $langcode.find(`option[value="${matches[2]}"]`).length
          ) {
            $langcode[0].value = matches[2];
          }
        });
      }
    },
  };
})(jQuery, Drupal);
