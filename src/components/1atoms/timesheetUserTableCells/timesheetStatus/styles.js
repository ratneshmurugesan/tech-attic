import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  Approved: { color: theme.palette.moduleColors.tabular_approved },
  Negotiate: { color: theme.palette.moduleColors.tabular_negotiate },
  Submitted: { color: theme.palette.moduleColors.tabular_submitted },
  Rejected: { color: theme.palette.moduleColors.tabular_rejected },
  Draft: { color: theme.palette.moduleColors.tabular_draft },
  Deleted: { color: theme.palette.moduleColors.tabular_deleted },
  Active: { color: theme.palette.moduleColors.tabular_active },
  Pending: { color: theme.palette.moduleColors.tabular_pending }
}));
