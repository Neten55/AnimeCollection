// Confirm before deleting an anime entry
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form[action$="/delete"]').forEach(form => {
    form.addEventListener('submit', e => {
      if (!confirm('Are you sure you want to delete this anime?')) {
        e.preventDefault();
      }
    });
  });
});
