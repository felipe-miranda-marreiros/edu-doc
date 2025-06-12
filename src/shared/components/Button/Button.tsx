import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

export interface ButtonProps extends TouchableOpacityProps {
  title: string
  isLoading?: boolean
  disabled?: boolean
}

export function Button({ title, isLoading, disabled, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      className="items-center justify-center px-5 h-14 border border-green-50 rounded-lg bg-green-600"
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size={20} color="#FFFFFF" />
      ) : (
        <Text className="text-lg text-white">{title}</Text>
      )}
    </TouchableOpacity>
  )
}
