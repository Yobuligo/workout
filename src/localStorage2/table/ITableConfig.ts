/**
 * An implementation of this interface provides information on how to configure a table, when it is defined.
 */
export interface ITableConfig {
  /**
   * Defines if createdAt and changedAt timestamps are set.
   * If {@link timestamps} is undefined created and changedAt are automatically set.
   */
  timestamps?: boolean;
}
